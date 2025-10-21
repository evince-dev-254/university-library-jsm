import emailjs from '@emailjs/browser';
import config from '@/lib/config';

// Initialize EmailJS
emailjs.init(config.env.emailjs.publicKey);

export interface EmailTemplateParams {
  to_name: string;
  to_email: string;
  from_name?: string;
  message?: string;
  subject?: string;
  [key: string]: any;
}

export interface WelcomeEmailParams {
  user_name: string;
  user_email: string;
  university_id: string;
  library_name: string;
}

export interface BookBorrowedEmailParams {
  user_name: string;
  user_email: string;
  book_title: string;
  book_author: string;
  borrow_date: string;
  return_date: string;
}

export interface BookReturnedEmailParams {
  user_name: string;
  user_email: string;
  book_title: string;
  book_author: string;
  return_date: string;
}

class EmailService {
  private serviceId: string;
  private templateId: string;

  constructor() {
    this.serviceId = config.env.emailjs.serviceId;
    this.templateId = config.env.emailjs.templateId;
  }

  /**
   * Send a generic email using EmailJS
   */
  async sendEmail(templateParams: EmailTemplateParams): Promise<boolean> {
    try {
      const result = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );
      
      console.log('Email sent successfully:', result);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  /**
   * Send welcome email to new users
   */
  async sendWelcomeEmail(params: WelcomeEmailParams): Promise<boolean> {
    const templateParams = {
      to_name: params.user_name,
      to_email: params.user_email,
      user_name: params.user_name,
      user_email: params.user_email,
      university_id: params.university_id,
      library_name: params.library_name || 'BookWise Library',
      subject: 'Welcome to BookWise Library!',
      message: `Welcome to BookWise Library, ${params.user_name}! Your account has been successfully created. You can now access our vast collection of books and resources.`,
    };

    return this.sendEmail(templateParams);
  }

  /**
   * Send book borrowed notification
   */
  async sendBookBorrowedEmail(params: BookBorrowedEmailParams): Promise<boolean> {
    const templateParams = {
      to_name: params.user_name,
      to_email: params.user_email,
      user_name: params.user_name,
      book_title: params.book_title,
      book_author: params.book_author,
      borrow_date: params.borrow_date,
      return_date: params.return_date,
      subject: 'Book Borrowed - BookWise Library',
      message: `Hello ${params.user_name}, you have successfully borrowed "${params.book_title}" by ${params.book_author}. Please return it by ${params.return_date}.`,
    };

    return this.sendEmail(templateParams);
  }

  /**
   * Send book returned confirmation
   */
  async sendBookReturnedEmail(params: BookReturnedEmailParams): Promise<boolean> {
    const templateParams = {
      to_name: params.user_name,
      to_email: params.user_email,
      user_name: params.user_name,
      book_title: params.book_title,
      book_author: params.book_author,
      return_date: params.return_date,
      subject: 'Book Returned - BookWise Library',
      message: `Hello ${params.user_name}, you have successfully returned "${params.book_title}" by ${params.book_author} on ${params.return_date}. Thank you for using BookWise Library!`,
    };

    return this.sendEmail(templateParams);
  }

  /**
   * Send password reset email
   */
  async sendPasswordResetEmail(
    userEmail: string,
    userName: string,
    resetLink: string
  ): Promise<boolean> {
    const templateParams = {
      to_name: userName,
      to_email: userEmail,
      user_name: userName,
      reset_link: resetLink,
      subject: 'Password Reset - BookWise Library',
      message: `Hello ${userName}, you have requested a password reset. Click the link below to reset your password: ${resetLink}`,
    };

    return this.sendEmail(templateParams);
  }

  /**
   * Send account status update email
   */
  async sendAccountStatusEmail(
    userEmail: string,
    userName: string,
    status: 'approved' | 'rejected' | 'suspended'
  ): Promise<boolean> {
    const statusMessages = {
      approved: 'Your account has been approved! You can now access all library features.',
      rejected: 'Your account application has been rejected. Please contact support for more information.',
      suspended: 'Your account has been suspended. Please contact support for assistance.',
    };

    const templateParams = {
      to_name: userName,
      to_email: userEmail,
      user_name: userName,
      account_status: status,
      subject: `Account ${status.charAt(0).toUpperCase() + status.slice(1)} - BookWise Library`,
      message: `Hello ${userName}, ${statusMessages[status]}`,
    };

    return this.sendEmail(templateParams);
  }
}

// Export singleton instance
export const emailService = new EmailService();
export default emailService;
