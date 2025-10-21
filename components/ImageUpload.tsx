'use client';

import React, { useRef, useState } from 'react';
import { IKImage, ImageKitProvider, IKUpload } from 'imagekitio-next';
import config from '@/lib/config';
import { toast } from '@/hooks/use-toast';

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;


const authenticator = async () => {
    try {
        const response = await fetch(`${config.env.apiEndpoint}/api/imagekit`, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
        
        const data = await response.json();
        const { signature, expire, token } = data;

        return { signature, expire, token };
    } catch (error: any) {
        throw new Error(`Authentication failed: ${error.message}`);
    }
};




const ImageUpload = ({onFileChange}: {onFileChange: (file: { filepath: string }) => void}) => {
    const ikUploadRef = useRef<any>(null);
    const [file, setFile] = useState<{ filepath: string } | null>(null);

    const onError = (error: any) => {
        console.error('Upload error:', error);
        toast({
            title: "Image Upload Failed",
            description: "Your file was not uploaded. Please try again.",
            variant: "destructive",
        });
    };

    const onSuccess = (response: any) => {
        setFile({ filepath: response.filePath });
        onFileChange({ filepath: response.filePath });

        toast({
            title: "Image Upload Successfully",
            description: `${response.filePath} Uploaded Successfully`,
        });
    };

    return (
        <ImageKitProvider
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
        >
            <IKUpload 
                className="hidden" 
                ref={ikUploadRef} 
                onError={onError} 
                onSuccess={onSuccess} 
                fileName="test-upload.png"
            />

            <button 
                className="upload-btn" 
                onClick={(e) => {
                    e.preventDefault();
                    if (ikUploadRef.current) {
                        ikUploadRef.current.click();
                    }
                }}
            >
                <img
                    src="/images/upload.svg"
                    alt="upload-icon"
                    width={20}
                    height={20}
                    className="object-contain"
                />
                <p className="text-base text-light-100">upload a file</p>
                {file && <p className="Upload-filename">{file.filepath}</p>}
            </button>

            {file && (
                <IKImage 
                    alt={file.filepath}
                    path={file.filepath}
                    width={500}
                    height={500}
                />
            )}
        </ImageKitProvider>
    );
};

export default ImageUpload