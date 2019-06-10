#!/bin/bash

electron-forge make ./src --platform=linux --arch=x64 
electron-forge make ./src --platform=win32 --arch=x64
electron-forge make ./src --platform=win32 --arch=ia32
