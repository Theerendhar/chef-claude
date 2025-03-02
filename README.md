# Chef Hugging Face

Stuck on what to cook with the ingredients you have? Let **Chef Hugging Face** help! Simply provide your list of ingredients, and our chef will suggest delicious recipes tailored to what you’ve got in your kitchen. Whether it's breakfast, lunch, or dinner, we’ve got you covered with the perfect meal ideas!

[Ask Chef Hugging Face Yourself](https://chef-claude-smoky.vercel.app/)


# Local Setup Steps

1. Clone the repository
2. move to the cloned repository
3. run "npm install"

# Before starting the local server, you need to set up your AI access token.

1. Go to Hugging Face.

2. Login or Signup:
    - If you’re creating a new account, verify the email sent to you. 
    
3. Generate the Access Token:
    - Click on your profile icon and go to the Settings page.
    - Under Settings, find the Access Tokens section.
    - Click on the Create new token button.
    - Provide a name for the token (e.g., Hugging Face) and select the Make calls to inference providers checkbox.
    - Click Create Token to generate the token.

4. Save your Token:
    - A pop-up will appear with your new access token. Save it in a secure location (password manager or notes). Note that you won’t be able to access the token again after closing the pop-up.

5. Create .env file:
    - Create it under src folder and enter below command
    - VITE_HF_ACCESS_KEY={YOUR_ACCESS_TOKEN}


# Run the App
- After completing the setup, you can start the local server with the following command:
    - npm run dev

# Additional Notes
**.env File:** Ensure that you **do not include the .env file in your version control system (e.g., Git). Add it to .gitignore to keep your token secure**.