@echo off
echo ========================================
echo   NOOH Living Elevated - GitHub Push
echo ========================================
echo.

cd /d "%~dp0"

echo Current directory: %CD%
echo.

echo Step 1: Configuring Git user...
git config user.name "adminnooh-collab"
git config user.email "admin@noohliving.com"
echo Done!
echo.

echo Step 2: Checking status...
git status
echo.

echo Step 3: Adding all files...
git add -A
echo Done!
echo.

echo Step 4: Committing changes...
git commit -m "Update NOOH Living Elevated website with logo integration"
echo.

echo Step 5: Pushing to GitHub...
echo.
echo IMPORTANT: When prompted, enter:
echo Username: adminnooh-collab
echo Password: [Your Personal Access Token]
echo.
echo Press any key to continue with push...
pause > nul

git push -u origin main

echo.
echo ========================================
if %ERRORLEVEL% EQU 0 (
    echo SUCCESS! Code pushed to GitHub.
    echo View at: https://github.com/adminnooh-collab/NooH_Front
) else (
    echo FAILED! Check error message above.
    echo.
    echo Common fixes:
    echo 1. Generate Personal Access Token at: https://github.com/settings/tokens
    echo 2. Clear credentials: cmdkey /delete:git:https://github.com
    echo 3. Try again
    echo.
    echo Read GITHUB_PUSH_GUIDE.md for detailed instructions.
)
echo ========================================
echo.
pause
