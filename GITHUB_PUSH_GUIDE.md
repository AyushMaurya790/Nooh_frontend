# GitHub Push Guide - Fix Permission Issue

## 🔴 Current Issue

**Error:** Permission denied to `AyushMaurya790` for repository `adminnooh-collab/NooH_Front.git`

This means the GitHub account currently configured (`AyushMaurya790`) doesn't have write access to the repository.

---

## ✅ Solution Options

### Option 1: Switch to Correct GitHub Account (Recommended)

If you need to use the `adminnooh-collab` account:

#### Step 1: Configure Git with Correct Credentials
```bash
cd D:\Nooh\nooh-living-elevated

# Set the correct user for this repository
git config user.name "adminnooh-collab"
git config user.email "your-email@example.com"
```

#### Step 2: Remove Cached Credentials
```bash
# Clear Windows Credential Manager
# Go to: Control Panel > Credential Manager > Windows Credentials
# Remove any GitHub credentials stored there
```

#### Step 3: Push Again (will prompt for login)
```bash
git push -u origin main
```

When prompted, enter:
- **Username:** `adminnooh-collab`
- **Password:** Use a **Personal Access Token** (not your password)

---

### Option 2: Create Personal Access Token

GitHub requires Personal Access Tokens for HTTPS authentication.

#### Step 1: Generate Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" (classic)
3. Name it: "NOOH Website Push"
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

#### Step 2: Use Token When Pushing
```bash
git push -u origin main
```

When prompted:
- **Username:** `adminnooh-collab`
- **Password:** `paste_your_token_here`

---

### Option 3: Use SSH Instead of HTTPS

More secure and doesn't require password each time.

#### Step 1: Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```
Press Enter for default location, then Enter twice for no passphrase.

#### Step 2: Copy Public Key
```bash
type %USERPROFILE%\.ssh\id_ed25519.pub
```
Copy the entire output.

#### Step 3: Add to GitHub
1. Go to: https://github.com/settings/keys
2. Click "New SSH key"
3. Title: "NOOH Website"
4. Paste the key
5. Click "Add SSH key"

#### Step 4: Change Remote URL to SSH
```bash
cd D:\Nooh\nooh-living-elevated
git remote set-url origin git@github.com:adminnooh-collab/NooH_Front.git
```

#### Step 5: Push
```bash
git push -u origin main
```

---

### Option 4: Add AyushMaurya790 as Collaborator

If the current user should have access:

1. Repository owner (`adminnooh-collab`) needs to:
   - Go to: https://github.com/adminnooh-collab/NooH_Front/settings/access
   - Click "Add people"
   - Add: `AyushMaurya790`
   - Give "Write" permission

2. Then push again:
```bash
git push -u origin main
```

---

## 🚀 Quick Fix Commands

### For Windows (Recommended)

```bash
# 1. Navigate to project
cd D:\Nooh\nooh-living-elevated

# 2. Configure correct user
git config user.name "adminnooh-collab"
git config user.email "admin@noohliving.com"

# 3. Remove old credentials (Windows)
cmdkey /delete:git:https://github.com

# 4. Try pushing (will prompt for credentials)
git push -u origin main

# Enter username: adminnooh-collab
# Enter password: [Your Personal Access Token]
```

---

## 📝 Check Current Configuration

```bash
# Check current Git user
git config user.name
git config user.email

# Check remote URL
git remote -v

# Check authentication status
git credential-manager-core get
```

---

## 🔐 Personal Access Token Setup (Detailed)

### Create Token:
1. Login to GitHub as `adminnooh-collab`
2. Go to: https://github.com/settings/tokens
3. Click: "Generate new token (classic)"
4. Settings:
   - **Note:** "NOOH Website Push Token"
   - **Expiration:** 90 days (or No expiration)
   - **Scopes:** Check `repo` (full control)
5. Click "Generate token"
6. **IMPORTANT:** Copy and save the token immediately!

### Use Token:
```bash
git push -u origin main

# When prompted:
Username: adminnooh-collab
Password: ghp_YourPersonalAccessTokenHere123456789
```

---

## 📊 Current Repository Status

```
Repository: NooH_Front
Owner: adminnooh-collab
URL: https://github.com/adminnooh-collab/NooH_Front.git
Current User: AyushMaurya790 ❌ (No access)
Branch: main
Status: All files committed ✅
Need: Push to remote ⏳
```

---

## ✅ After Successful Push

Once you fix the authentication and push successfully, verify:

```bash
# Check if push was successful
git log --oneline

# View remote branches
git branch -r

# Confirm everything is pushed
git status
```

You should see:
```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

---

## 🌐 View Your Website on GitHub

After successful push:
1. Go to: https://github.com/adminnooh-collab/NooH_Front
2. You'll see all your code
3. Enable GitHub Pages (optional):
   - Settings > Pages
   - Source: Deploy from branch
   - Branch: main, /build folder
   - Save

---

## 🆘 Still Having Issues?

### Check Credential Manager (Windows)
1. Press Windows key
2. Search "Credential Manager"
3. Click "Windows Credentials"
4. Look for "git:https://github.com"
5. Remove/Edit it
6. Try push again

### Force HTTPS Authentication
```bash
git config --global credential.helper manager-core
git push -u origin main
```

### Verbose Push (See Detailed Errors)
```bash
GIT_CURL_VERBOSE=1 git push -u origin main
```

---

## 📱 Contact Repository Owner

If you need access, contact the repository owner:
- Repository: adminnooh-collab/NooH_Front
- Ask them to add you as collaborator
- Or ask for a Personal Access Token with write access

---

## 🎯 Recommended Solution

**For Immediate Push:**

1. **Get Personal Access Token** from adminnooh-collab account
2. **Clear Windows Credentials:**
   ```bash
   cmdkey /delete:git:https://github.com
   ```
3. **Push with token:**
   ```bash
   git push -u origin main
   # Username: adminnooh-collab
   # Password: [paste token]
   ```

**For Long-term:**
- Set up SSH keys (Option 3 above)
- Or add current user as collaborator (Option 4 above)

---

## 📋 Summary

**Problem:** Wrong GitHub account credentials  
**Solution:** Use adminnooh-collab credentials with Personal Access Token  
**Status:** Ready to push once credentials are fixed  
**Files:** All committed and ready ✅

---

**Need Help?** Contact: info@noohliving.com | +91 9540060180
