@echo off
echo Adding all changes...
git add .

echo Committing changes...
git commit -m "Fix asset loading issues - URL encode spaces and fix paths"

echo Pushing to GitHub...
git push

echo Done! Vercel will automatically redeploy.
pause 