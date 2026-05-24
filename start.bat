@echo off
CALL "%~d0\env_setup.bat"
echo Starting Medical Web (Dev Mode)...
npm run dev
pause
