# EmailJS Environment Variables Setup

## Step 1: Create Environment File

Create a `.env.local` file in your project root with the following variables:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 2: Get Your EmailJS Credentials

### 1. Sign up at [EmailJS Dashboard](https://dashboard.emailjs.com)

### 2. Get your Public Key
- Go to **Account** → **API Keys**
- Copy your **Public Key**

### 3. Create an Email Service
- Go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions
- Copy the **Service ID**

### 4. Create Email Templates
- Go to **Email Templates**
- Click **Create New Template**
- Use this template for welcome emails:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2563eb;">Welcome to BookWise Library!</h2>
  <p>Dear {{user_name}},</p>
  <p>Welcome to BookWise Library! Your account has been successfully created.</p>
  
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3>Your Account Details:</h3>
    <ul>
      <li><strong>Name:</strong> {{user_name}}</li>
      <li><strong>Email:</strong> {{user_email}}</li>
      <li><strong>University ID:</strong> {{university_id}}</li>
    </ul>
  </div>
  
  <p>You can now browse our book collection and start borrowing!</p>
  <p>Best regards,<br>The BookWise Library Team</p>
</div>
```

- Copy the **Template ID**

## Step 3: Update Your Environment Variables

Replace the placeholder values in your `.env.local` file:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_def456
```

## Step 4: For Vercel Deployment

Add these same environment variables to your Vercel project:

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Step 5: Test Your Setup

After setting up the environment variables, restart your development server:

```bash
npm run dev
```

The welcome email will be sent automatically when users sign up!

## Template Variables Available

Your EmailJS templates can use these variables:

- `{{user_name}}` - User's full name
- `{{user_email}}` - User's email address
- `{{university_id}}` - User's university ID
- `{{library_name}}` - Library name (defaults to "BookWise Library")
- `{{book_title}}` - Book title (for book-related emails)
- `{{book_author}}` - Book author (for book-related emails)
- `{{borrow_date}}` - Date book was borrowed
- `{{return_date}}` - Date book should be returned

