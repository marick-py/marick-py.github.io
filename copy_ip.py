import sys
import pyperclip
import os

def print_help():
    print("Usage: python script.py [-port PORT] [-index INDEX] [-h]")
    print("-port PORT: Specify the port number (default is 5500).")
    print("-index INDEX: Specify the index page (default is index.html).")
    print("-h: Display this help message.")
    sys.exit(0)

if "-h" in sys.argv:
    print_help()

if "-port" in sys.argv:
    port = sys.argv[sys.argv.index("-p")+1]
else:
    port = "5500"

if "-index" in sys.argv:
    page = sys.argv[sys.argv.index("-index")+1]
else:
    page = "index.html"

base_link = "http://{}:{}/{}"

def get_ip() -> str:
    return os.popen("ipconfig").read().split("IPv4")[1].split("\n")[0].split(": ")[1]

def copy_link(text:str) -> None:
    pyperclip.copy(text)

def main() -> None:
    ip = get_ip()
    text = base_link.format(ip, port, page)
    copy_link(text)

if __name__ == "__main__":
    main()
