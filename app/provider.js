'use client';

import { DragDropLayoutElement } from '@/context/DragDropLayoutElement';
import { EmailTemplateContext } from '@/context/EmailTemplateContext';
import { ScreenSizeContext } from '@/context/ScreenSizeContext';
import { SelectedElementContext } from '@/context/SelectedElementContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

function Provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [userDetail, setUserDetail] = useState();
  const [screenSize, setScreenSize] = useState('desktop');
  const [dragElementLayout, setDragElementLayout] = useState();
  const [emailTemplate, setEmailTemplate] = useState([]);
  const [selectedElement, setSelectedElement] = useState();

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storage = JSON.parse(localStorage.getItem('userDetail'));
      const emailTemplate = JSON.parse(localStorage.getItem('emailTemplate'));
      setEmailTemplate(emailTemplate ?? []);
      if (!storage || !storage?.email) {
        // Redirect user to home screen
        router.push('/');
      }
      setUserDetail(storage);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('emailTemplate', JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);

  useEffect(() => {
    if (selectedElement) {
      let updateEmailTemplate = [];
      emailTemplate.forEach((item, index) => {
        if (item.id === selectedElement?.layout?.id) {
          updateEmailTemplate?.push(selectedElement?.layout);
        } else {
          updateEmailTemplate.push(item);
        }
      });

      setEmailTemplate(updateEmailTemplate);
    }
  }, [selectedElement]);

  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
            <DragDropLayoutElement.Provider
              value={{ dragElementLayout, setDragElementLayout }}
            >
              <EmailTemplateContext.Provider
                value={{ emailTemplate, setEmailTemplate }}
              >
                <SelectedElementContext.Provider
                  value={{ selectedElement, setSelectedElement }}
                >
                  <div>{children}</div>
                </SelectedElementContext.Provider>
              </EmailTemplateContext.Provider>
            </DragDropLayoutElement.Provider>
          </ScreenSizeContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
}

export default Provider;

export const useUserDetail = () => {
  return useContext(UserDetailContext);
};

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};

export const useDragElementLayout = () => {
  return useContext(DragDropLayoutElement);
};

export const useEmailTemplate = () => {
  return useContext(EmailTemplateContext);
};

export const useSelectedElement = () => {
  return useContext(SelectedElementContext);
};
