#!/usr/bin/env python3
"""Kleiner Testserver MIT Range-Unterstuetzung.
Der eingebaute python3 -m http.server kann keine Range-Anfragen —
Videos lassen sich damit im Browser nicht spulen.

    python3 serve.py          -> http://localhost:8000
"""
import http.server, os, re, sys, socketserver

class RangeHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        rng = self.headers.get('Range')
        if not rng:
            self.extra_headers = True
            return super().send_head()
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404)
            return None
        size = os.fstat(f.fileno()).st_size
        m = re.match(r'bytes=(\d*)-(\d*)', rng)
        start, end = m.group(1), m.group(2)
        start = int(start) if start else 0
        end = int(end) if end else size - 1
        end = min(end, size - 1)
        if start > end:
            self.send_error(416); f.close(); return None
        self.send_response(206)
        self.send_header('Content-Type', self.guess_type(path))
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Content-Range', 'bytes %d-%d/%d' % (start, end, size))
        self.send_header('Content-Length', str(end - start + 1))
        self.end_headers()
        f.seek(start)
        self.wfile.write(f.read(end - start + 1))
        f.close()
        return None

    def end_headers(self):
        if getattr(self, 'extra_headers', False):
            self.send_header('Accept-Ranges', 'bytes')
            self.extra_headers = False
        super().end_headers()

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
socketserver.TCPServer.allow_reuse_address = True
with socketserver.ThreadingTCPServer(('', port), RangeHandler) as httpd:
    print('http://localhost:%d  (Strg+C beendet)' % port)
    httpd.serve_forever()
