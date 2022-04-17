#!/usr/bin/python

import sys
import codecs

pythonMajorVersion = sys.version_info[0]

commandLineArguments = sys.argv
stdin = sys.stdin
stdout = sys.stdout

utf8Reader = codecs.getreader('utf8')
utf8Writer = codecs.getwriter('utf8')

inputReader = None
outputWriter = None

def printFormatted(string, placeholder):
    print(string.format(placeholder))

printFormatted(
    "Total number of arguments is {} arguments",
    len(commandLineArguments)
)
printFormatted(
    "Arguments: {}",
    str(commandLineArguments)
)

if pythonMajorVersion >= 3:
    inputReader = utf8Reader(stdin.buffer)
    outputWriter = utf8Writer(stdout.buffer)
else:
    inputReader = utf8Reader(stdin)
    outputWriter = utf8Writer(stdout)

for data in inputReader:
    outputWriter.write('Received from Node.js process ' + data)

inputReader.close()
outputWriter.close()