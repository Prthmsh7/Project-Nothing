#!/bin/bash

echo "🚀 Starting NOTHING - The Ultimate Study Oasis"
echo "==============================================="
echo ""

echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

echo ""
echo "🗄️  Syncing the database..."
npx prisma db push

echo ""
echo "🌐 Starting the development server..."
npm run dev 