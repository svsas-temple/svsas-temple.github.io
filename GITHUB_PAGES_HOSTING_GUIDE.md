# 📖 Step-by-Step Guide: Publish to GitHub & Host Free on GitHub Pages
**Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam Website**

This guide walks you through publishing your temple website codebase to GitHub and activating **GitHub Pages** to host it online **100% free of cost forever**, including free automatic SSL (HTTPS).

---

## 📋 Prerequisites
1. A free GitHub account. If you don't have one, create it at [https://github.com](https://github.com).
2. Git installed on your computer *(already verified on your system: Git 2.49)*.

---

## 🚀 Step 1: Prepare & Commit Your Local Code

Open your terminal (PowerShell or Command Prompt) in your project folder:
`c:\Users\sandy\Antigravity Projects\Temple Website`

Run the following commands:

```bash
# 1. Initialize local Git repository (if not already done)
git init

# 2. Add all project files
git add .

# 3. Create your initial commit
git commit -m "Initial commit: Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam web portal"

# 4. Set the default branch to 'main'
git branch -M main
```

---

## 🌐 Step 2: Create a New Repository on GitHub

1. Log in to [github.com](https://github.com).
2. In the top-right corner, click the **`+`** icon and select **New repository** (or go directly to [github.com/new](https://github.com/new)).
3. Fill in the repository details:
   * **Repository name:** e.g., `temple-website` or `nacharam-ayyappa-temple`
   * **Description (optional):** `Official Web Portal for Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam, Nacharam, Hyderabad`
   * **Visibility:** Select **Public** *(Important: GitHub Pages is 100% free for all Public repositories)*.
   * **Initialize repository with:** **Leave all unchecked** (Do **NOT** check "Add a README file", "Add .gitignore", or "Choose a license" because our project already has these files).
4. Click the green **Create repository** button.

---

## 📤 Step 3: Link & Push Your Code to GitHub

After creating the repository, GitHub will show you commands under the heading *"…or push an existing repository from the command line"*.

Copy and run those commands in your terminal (replace `<YOUR-USERNAME>` and `<REPO-NAME>` with your actual GitHub username and repository name):

```bash
# Link your local folder to your GitHub repository
git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git

# Push your code to GitHub
git push -u origin main
```

> **Note:** If GitHub asks you to sign in, authenticate using your browser or personal access token.

Once the push completes, refresh your GitHub repository page in the browser. You will see all your files (`index.html`, `styles.css`, `app.js`, `/assets/`, etc.) safely stored on GitHub!

---

## ⚡ Step 4: Turn On 100% Free Hosting (GitHub Pages)

Now that your code is on GitHub, enable free hosting with just 3 clicks:

1. In your GitHub repository, click the **Settings** tab (the gear icon at the top menu).
2. On the left sidebar menu under the *Code and automation* section, click **Pages**.
3. Under **Build and deployment**:
   * **Source:** Select **`Deploy from a branch`**.
   * **Branch:** Select **`main`** from the branch dropdown.
   * **Folder:** Keep it as **`/ (root)`**.
4. Click the **Save** button.

---

## 🌍 Step 5: Your Website Is Live!

Within 60 to 90 seconds, GitHub automatically deploys your website.

1. Refresh the **Settings -> Pages** page.
2. At the top of the page, you will see a banner:
   > *"Your site is live at `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`"*
3. Click the link or open it in any browser or smartphone—your temple website is now accessible to devotees across the world!

---

## 🏷️ Step 6: Connecting Your Custom Domain (When Ready)

When you purchase your official domain name (e.g., `ayyappanacharam.org` or `nacharamtemple.in`), you can link it directly to your GitHub Pages site for free:

### 1. In GitHub Pages:
* Go back to **Settings -> Pages**.
* Under **Custom domain**, type your domain (e.g., `ayyappanacharam.org`).
* Click **Save**. GitHub will automatically create a `CNAME` file in your repository.
* Check the box for **Enforce HTTPS** (GitHub provides a **free lifetime SSL certificate**).

### 2. In Your Domain Provider (Cloudflare / Namecheap / GoDaddy):
Add the following DNS records in your domain's DNS management panel:

| Type | Name / Host | Target / Value | Purpose |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | GitHub Pages Server 1 |
| **A** | `@` | `185.199.109.153` | GitHub Pages Server 2 |
| **A** | `@` | `185.199.110.153` | GitHub Pages Server 3 |
| **A** | `@` | `185.199.111.153` | GitHub Pages Server 4 |
| **CNAME** | `www` | `<YOUR-USERNAME>.github.io` | Points www to your site |

DNS propagation typically takes 10 to 30 minutes, after which your custom domain will securely load your temple website with HTTPS!

---

## 💡 Summary of Recurring Costs
* **Hosting:** **$0.00 / Free Forever** (GitHub Pages)
* **SSL Certificate:** **$0.00 / Free Forever** (Automated by GitHub)
* **Bandwidth & CDN:** **$0.00 / Free Forever** (100 GB/month limit, more than enough for millions of page views)
* **Maintenance / Server:** **$0.00 / None** (Static site, zero servers to patch or update)
* **Only Expense:** Your annual domain registration fee (~₹700–₹1,000/year to the domain registrar).
