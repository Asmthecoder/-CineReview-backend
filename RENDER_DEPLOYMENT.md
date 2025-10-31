# 🚀 Backend Deployment Guide - Render

## ✅ Pre-Deployment Checklist

- [x] MongoDB Atlas database created and populated
- [x] Environment variables configured in `.env` (NOT committed to git)
- [x] Code updated to use environment variables
- [x] `.gitignore` includes `.env`

---

## 📋 Step 1: Push to GitHub

```bash
cd c:\Users\abels\Pictures\MovieReviewSite\-CineReview-backend
git add .
git commit -m "Update backend for cloud deployment with MongoDB Atlas"
git push origin main
```

---

## 🌐 Step 2: Deploy to Render

### A. Create Render Account
1. Go to: https://render.com
2. Click **"Get Started for Free"**
3. Sign up with **GitHub**

### B. Create New Web Service
1. Click **"New +"** (top right)
2. Select **"Web Service"**
3. Click **"Connect a repository"**
4. Find and select: `kushalpatel0265/-CineReview-backend`

### C. Configure Service
Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `cinereview-backend` |
| **Region** | Choose closest to you |
| **Branch** | `main` |
| **Root Directory** | `server` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node index.js` |
| **Instance Type** | `Free` |

### D. Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these 3 variables:

1. **MONGODB_URI**
   ```
   mongodb+srv://abelsmathew2020_db_user:zoHEPi2av9u1rS1X@cluster0.vcifh3m.mongodb.net/?appName=Cluster0
   ```

2. **DB_NAME**
   ```
   cinereview
   ```

3. **NODE_ENV**
   ```
   production
   ```

### E. Deploy!
1. Click **"Create Web Service"**
2. Wait 2-3 minutes for deployment
3. Watch the logs for: `✅ Connected to MongoDB Atlas!`

---

## 🔗 Step 3: Get Your Backend URL

Once deployed, Render will give you a URL like:
```
https://cinereview-backend.onrender.com
```

**Test it:**
```
https://cinereview-backend.onrender.com/api/v1/reviews/movie/278
```

You should see JSON with movie reviews!

---

## ⚠️ Important Notes

1. **Free Tier Limitations:**
   - Service sleeps after 15 minutes of inactivity
   - First request after sleep takes 30-60 seconds
   - 750 hours/month free

2. **MongoDB Atlas IP Whitelist:**
   - Make sure it's set to `0.0.0.0/0` (allow from anywhere)
   - Or add Render's IP addresses

3. **Environment Variables:**
   - NEVER commit `.env` to git
   - Always set in Render dashboard
   - Can update anytime in Settings

---

## 🐛 Troubleshooting

### Build Failed?
- Check build logs in Render dashboard
- Make sure `package.json` is in `server/` folder
- Verify all dependencies are listed

### Can't Connect to MongoDB?
- Check MongoDB Atlas IP whitelist
- Verify `MONGODB_URI` in Render environment variables
- Check MongoDB Atlas credentials are correct

### 404 Errors?
- Make sure routes are defined correctly
- Check CORS is enabled in `server.js`
- Verify API endpoint URLs

---

## 📝 Next: Deploy Frontend

Once backend is live:
1. Copy your Render URL
2. Update frontend API URL in `frontend-react/src/utils/constants.js`
3. Build React app: `npm run build`
4. Deploy to Netlify

---

## ✅ Success Indicators

You're ready when you see:
- ✅ Render dashboard shows "Live"
- ✅ Backend URL returns reviews JSON
- ✅ Logs show MongoDB connection success
- ✅ No errors in deploy logs

---

**Your backend will be available at:**
`https://YOUR-SERVICE-NAME.onrender.com/api/v1/reviews/`

🎉 Ready to deploy!
