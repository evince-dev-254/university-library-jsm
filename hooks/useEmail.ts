import { useState } from 'react';
import { emailService } from '@/lib/services/emailService';

export interface UseEmailReturn {
  sendEmail: (params: any) => Promise<boolean>;
  sendWelcomeEmail: (params: {
    user_name: string;
    user_email: string;
    university_id: string;
    library_name?: string;
  }) => Promise<boolean>;
  sendBookBorrowedEmail: (params: {
    user_name: string;
    user_email: string;
    book_title: string;
    book_author: string;
    borrow_date: string;
    return_date: string;
  }) => Promise<boolean>;
  sendBookReturnedEmail: (params: {
    user_name: string;
    user_email: string;
    book_title: string;
    book_author: string;
    return_date: string;
  }) => Promise<boolean>;
  sendPasswordResetEmail: (
    userEmail: string,
    userName: string,
    resetLink: string
  ) => Promise<boolean>;
  sendAccountStatusEmail: (
    userEmail: string,
    userName: string,
    status: 'approved' | 'rejected' | 'suspended'
  ) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export const useEmail = (): UseEmailReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailAction = async (emailAction: () => Promise<boolean>): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await emailAction();
      if (!result) {
        setError('Failed to send email');
      }
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const sendEmail = async (params: any): Promise<boolean> => {
    return handleEmailAction(() => emailService.sendEmail(params));
  };

  const sendWelcomeEmail = async (params: {
    user_name: string;
    user_email: string;
    university_id: string;
    library_name?: string;
  }): Promise<boolean> => {
    return handleEmailAction(() => emailService.sendWelcomeEmail(params));
  };

  const sendBookBorrowedEmail = async (params: {
    user_name: string;
    user_email: string;
    book_title: string;
    book_author: string;
    borrow_date: string;
    return_date: string;
  }): Promise<boolean> => {
    return handleEmailAction(() => emailService.sendBookBorrowedEmail(params));
  };

  const sendBookReturnedEmail = async (params: {
    user_name: string;
    user_email: string;
    book_title: string;
    book_author: string;
    return_date: string;
  }): Promise<boolean> => {
    return handleEmailAction(() => emailService.sendBookReturnedEmail(params));
  };

  const sendPasswordResetEmail = async (
    userEmail: string,
    userName: string,
    resetLink: string
  ): Promise<boolean> => {
    return handleEmailAction(() => 
      emailService.sendPasswordResetEmail(userEmail, userName, resetLink)
    );
  };

  const sendAccountStatusEmail = async (
    userEmail: string,
    userName: string,
    status: 'approved' | 'rejected' | 'suspended'
  ): Promise<boolean> => {
    return handleEmailAction(() => 
      emailService.sendAccountStatusEmail(userEmail, userName, status)
    );
  };

  return {
    sendEmail,
    sendWelcomeEmail,
    sendBookBorrowedEmail,
    sendBookReturnedEmail,
    sendPasswordResetEmail,
    sendAccountStatusEmail,
    isLoading,
    error,
  };
};

export default useEmail;
