<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1XGsUcp2FWBVvMx9_bCGOjEhhITnGq4Zi

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Set the GitHub Pages source to **GitHub Actions** in your repository settings.
2. If you are deploying to a project page (for example `https://user.github.io/repo/`), set
   `VITE_BASE_URL=/repo/` in your workflow or repository secrets. For user/organization pages,
   leave `VITE_BASE_URL` unset to default to `/`.
3. Push to the `main` branch to trigger the deployment workflow.
