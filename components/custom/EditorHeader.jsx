'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Code, Monitor, Smartphone } from 'lucide-react';
import { useEmailTemplate, useScreenSize } from '@/app/provider';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

function EditorHeader({ viewHtmlCode }) {
  const { screenSize, setScreenSize } = useScreenSize();
  const updateEmailTemplate = useMutation(
    api.emailTemplate.UpdateTemplateDesign
  );
  const { templateId } = useParams();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();

  const onSaveTemplate = async () => {
    await updateEmailTemplate({
      tid: templateId,
      design: emailTemplate,
    });
    toast.success('Email Template saved successfully');
  };

  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Image
        src={'/logo.svg'}
        alt="logo"
        width={70}
        height={50}
        className="rounded-xl"
      />

      <div className="flex items-center gap-3">
        <Button
          variant={`${screenSize == 'desktop' ? null : 'ghost'}`}
          className={`${screenSize == 'desktop' && 'bg-purple-100 text-primary '}`}
          onClick={() => setScreenSize('desktop')}
        >
          <Monitor /> Desktop
        </Button>
        <Button
          onClick={() => setScreenSize('mobile')}
          variant={`${screenSize == 'mobile' ? null : 'ghost'}`}
          className={`${screenSize == 'mobile' && 'bg-purple-100 text-primary'}`}
        >
          <Smartphone /> Mobile
        </Button>
      </div>
      <div className="flex gap-3">
        <Button variant="ghost" onClick={() => viewHtmlCode(true)}>
          <Code />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button onClick={onSaveTemplate}>Save Template</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
