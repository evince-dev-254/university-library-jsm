// Email templates for different scenarios

export const emailTemplates = {
  welcome: {
    subject: "Welcome to BookWise Library!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Welcome to BookWise Library!</h2>
        <p>Dear {{user_name}},</p>
        <p>Welcome to BookWise Library! Your account has been successfully created and you can now access our vast collection of books and resources.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Your Account Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Name:</strong> {{user_name}}</li>
            <li><strong>Email:</strong> {{user_email}}</li>
            <li><strong>University ID:</strong> {{university_id}}</li>
          </ul>
        </div>
        
        <p>You can now:</p>
        <ul>
          <li>Browse our extensive book collection</li>
          <li>Borrow books online</li>
          <li>Track your borrowing history</li>
          <li>Access digital resources</li>
        </ul>
        
        <p>If you have any questions, please don't hesitate to contact our support team.</p>
        
        <p>Best regards,<br>The BookWise Library Team</p>
      </div>
    `,
    text: `
      Welcome to BookWise Library!
      
      Dear {{user_name}},
      
      Welcome to BookWise Library! Your account has been successfully created and you can now access our vast collection of books and resources.
      
      Your Account Details:
      - Name: {{user_name}}
      - Email: {{user_email}}
      - University ID: {{university_id}}
      
      You can now:
      - Browse our extensive book collection
      - Borrow books online
      - Track your borrowing history
      - Access digital resources
      
      If you have any questions, please don't hesitate to contact our support team.
      
      Best regards,
      The BookWise Library Team
    `
  },

  bookBorrowed: {
    subject: "Book Borrowed - BookWise Library",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Book Successfully Borrowed</h2>
        <p>Dear {{user_name}},</p>
        <p>You have successfully borrowed a book from BookWise Library.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Book Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Title:</strong> {{book_title}}</li>
            <li><strong>Author:</strong> {{book_author}}</li>
            <li><strong>Borrow Date:</strong> {{borrow_date}}</li>
            <li><strong>Return Date:</strong> {{return_date}}</li>
          </ul>
        </div>
        
        <p><strong>Important:</strong> Please return the book by {{return_date}} to avoid any late fees.</p>
        
        <p>Thank you for using BookWise Library!</p>
        
        <p>Best regards,<br>The BookWise Library Team</p>
      </div>
    `,
    text: `
      Book Successfully Borrowed
      
      Dear {{user_name}},
      
      You have successfully borrowed a book from BookWise Library.
      
      Book Details:
      - Title: {{book_title}}
      - Author: {{book_author}}
      - Borrow Date: {{borrow_date}}
      - Return Date: {{return_date}}
      
      Important: Please return the book by {{return_date}} to avoid any late fees.
      
      Thank you for using BookWise Library!
      
      Best regards,
      The BookWise Library Team
    `
  },

  bookReturned: {
    subject: "Book Returned - BookWise Library",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">Book Successfully Returned</h2>
        <p>Dear {{user_name}},</p>
        <p>You have successfully returned a book to BookWise Library.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Book Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Title:</strong> {{book_title}}</li>
            <li><strong>Author:</strong> {{book_author}}</li>
            <li><strong>Return Date:</strong> {{return_date}}</li>
          </ul>
        </div>
        
        <p>Thank you for returning the book on time! You can now borrow more books from our collection.</p>
        
        <p>Best regards,<br>The BookWise Library Team</p>
      </div>
    `,
    text: `
      Book Successfully Returned
      
      Dear {{user_name}},
      
      You have successfully returned a book to BookWise Library.
      
      Book Details:
      - Title: {{book_title}}
      - Author: {{book_author}}
      - Return Date: {{return_date}}
      
      Thank you for returning the book on time! You can now borrow more books from our collection.
      
      Best regards,
      The BookWise Library Team
    `
  },

  passwordReset: {
    subject: "Password Reset - BookWise Library",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">Password Reset Request</h2>
        <p>Dear {{user_name}},</p>
        <p>You have requested a password reset for your BookWise Library account.</p>
        
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
          <p><strong>Click the link below to reset your password:</strong></p>
          <a href="{{reset_link}}" style="color: #2563eb; text-decoration: none; font-weight: bold;">Reset Password</a>
        </div>
        
        <p><strong>Important:</strong> This link will expire in 24 hours for security reasons.</p>
        
        <p>If you didn't request this password reset, please ignore this email.</p>
        
        <p>Best regards,<br>The BookWise Library Team</p>
      </div>
    `,
    text: `
      Password Reset Request
      
      Dear {{user_name}},
      
      You have requested a password reset for your BookWise Library account.
      
      Click the link below to reset your password:
      {{reset_link}}
      
      Important: This link will expire in 24 hours for security reasons.
      
      If you didn't request this password reset, please ignore this email.
      
      Best regards,
      The BookWise Library Team
    `
  },

  accountStatus: {
    approved: {
      subject: "Account Approved - BookWise Library",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">Account Approved!</h2>
          <p>Dear {{user_name}},</p>
          <p>Great news! Your BookWise Library account has been approved and you now have full access to all library features.</p>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
            <p><strong>You can now:</strong></p>
            <ul>
              <li>Browse and borrow books</li>
              <li>Access digital resources</li>
              <li>Use all library services</li>
            </ul>
          </div>
          
          <p>Welcome to BookWise Library!</p>
          
          <p>Best regards,<br>The BookWise Library Team</p>
        </div>
      `
    },
    rejected: {
      subject: "Account Application Rejected - BookWise Library",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Account Application Rejected</h2>
          <p>Dear {{user_name}},</p>
          <p>We regret to inform you that your BookWise Library account application has been rejected.</p>
          
          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <p>If you believe this is an error, please contact our support team for assistance.</p>
          </div>
          
          <p>Best regards,<br>The BookWise Library Team</p>
        </div>
      `
    },
    suspended: {
      subject: "Account Suspended - BookWise Library",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Account Suspended</h2>
          <p>Dear {{user_name}},</p>
          <p>Your BookWise Library account has been suspended.</p>
          
          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <p>Please contact our support team for assistance and to resolve this issue.</p>
          </div>
          
          <p>Best regards,<br>The BookWise Library Team</p>
        </div>
      `
    }
  }
};

export default emailTemplates;
