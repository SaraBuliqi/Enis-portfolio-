#!/bin/bash

# Force deployment script for Enis Portfolio
echo "🚀 Starting deployment process..."

# Add all changes
git add .

# Commit with timestamp
git commit -m "Force deployment update - $(date)"

# Push to trigger Vercel deployment
git push

echo "✅ Deployment triggered! Check Vercel dashboard for status."
echo "🌐 Live site: https://enis-portfolio-nine.vercel.app/"
echo "📄 CV page: https://enis-portfolio-nine.vercel.app/cv" 