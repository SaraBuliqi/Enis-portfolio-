@echo off
echo Deploying to GitHub...
git add .
git commit -m "Fix CV routing and deployment - force rebuild"
git push
echo Deployment complete!
pause 