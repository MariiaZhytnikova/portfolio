// src/sections/Contacts.tsx
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { Section } from "../components/layout/Section.tsx";
import { Container } from "../components/ui/Container.tsx";
import { Card } from "../components/ui/Card.tsx";
import { HeadingLG, BodyTextSm } from "../components/ui/Typography";
import { PrimaryWideButton, CloseButton } from "../components/ui/Button.tsx";
import { SocialButtons } from "../components/ui/SosialButtons.tsx";
import { socialLinks } from "../data/SocialLinksData.tsx";
import { ContactList } from "../components/ui/ContactList.tsx";
import { contactInfo } from "../data/ContactInfoData.tsx";
import { FieldWrapper } from "../components/ui/MotionWrapper.tsx";
import { CenteredWrapper } from "../components/ui/CenteredWrapper.tsx";
import { privacyAgreementText } from "../pages/PrivacyAgreement.ts";
import { termsOfServiceText } from "../pages/TermsOfService.ts";
import {
  Form,
  InlineField,
  IconWrapper,
  Textarea,
  Input,
}
from "../components/ui/Form.tsx";
import {
  ColumnGrid,
  LeftColumn,
  RightColumn,
} from "../components/ui/Columns.tsx";
import { Separator } from "../components/ui/Separator.tsx";
import { ModalOverlay, ModalContent } from "../components/ui/Modals.tsx";
import { DocLink, FooterLinks } from "../components/ui/Nav";

type GetInTouchProps = {
  id?: string;
};

export function GetInTouch({ id }: GetInTouchProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [modalTop, setModalTop] = useState(0);

  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    if (showPrivacy || showTerms) {
      const syncModalTop = () => {
        setModalTop(window.scrollY);
      };

      syncModalTop();
      window.addEventListener("scroll", syncModalTop, { passive: true });
      window.addEventListener("resize", syncModalTop);

      return () => {
        window.removeEventListener("scroll", syncModalTop);
        window.removeEventListener("resize", syncModalTop);
      };
    }
  }, [showPrivacy, showTerms]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("idle");

    const response = await fetch("https://formspree.io/f/mlgpyyjd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <Section id={id ?? "getintouch"}>
      <Container  $paddingTop="40px" $paddingBottom="40px">
        <Card height="auto">
          <HeadingLG>Get In Touch</HeadingLG>
          <ColumnGrid>
            <LeftColumn>
              <BodyTextSm>
                I'm always open to new opportunities and interesting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </BodyTextSm>

                {/* Contact Info */}
                <ContactList items={contactInfo} />
                <SocialButtons buttons={socialLinks}/>
            </LeftColumn>

          <RightColumn>
          <Form onSubmit={handleSubmit}>
            {/* Name */}
            <FieldWrapper delay={0.3}>
              <InlineField>
                <IconWrapper $focused={focusedField === 'name'} color="#A855F7">
                  <User size={20} />
                </IconWrapper>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="your name"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  required
                />
              </InlineField>
            </FieldWrapper>

            {/* Email */}
            <FieldWrapper delay={0.4}>
              <InlineField>
                <IconWrapper $focused={focusedField === 'email'} color="#FB923C">
                  <Mail size={20} />
                </IconWrapper>
                <Input
                  type="email"
                  $focusColor="#FB923C"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="your.email@example.com"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  required
                />
              </InlineField>
            </FieldWrapper>

            {/* Message */}
            <FieldWrapper delay={0.5}>
              <InlineField>
                <IconWrapper $focused={focusedField === 'message'} color="#A855F7" $alignTop>
                  <MessageSquare size={20} />
                </IconWrapper>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="your message..."
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  required
                />
              </InlineField>
            </FieldWrapper>

            {/* Submit */}
            <CenteredWrapper>
              <PrimaryWideButton type="submit">
                {status === "idle" && (
                  <>
                    <span style={{ fontSize: 16, lineHeight: 1 }}>Send Message</span>
                    <Send size={20} />
                  </>
                )}

                {status === "success" && (
                  <>
                    <Send size={20} />
                    <span style={{ fontSize: 16, lineHeight: 1 }}>Sent!</span>
                  </>
                )}

                {status === "error" && (
                  <span style={{ fontSize: 16, lineHeight: 1 }}>❌ Try again</span>
                )}
              </PrimaryWideButton>
            </CenteredWrapper>
          </Form>
          <FooterLinks>
            <span style={{ fontSize: 12, lineHeight: 1 }}>By using this form, you agree to our </span>
            <DocLink 
              type="button"
              onClick={() => setShowPrivacy(true)}
            >
              Privacy Agreement
            </DocLink>
            <Separator>•</Separator>
            <DocLink 
              type="button"
              onClick={() => setShowTerms(true)}
            >
              Terms of Service
            </DocLink>
          </FooterLinks>
          </RightColumn>
          </ColumnGrid>
        </Card>
      </Container>
      
      {/* Privacy Modal - rendered via portal */}
      {showPrivacy && createPortal(
        <ModalOverlay $top={modalTop} onClick={() => setShowPrivacy(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowPrivacy(false)}>
              ×
            </CloseButton>
            <pre>
              {privacyAgreementText}
            </pre>
          </ModalContent>
        </ModalOverlay>,
        document.body
      )}

      {/* Terms Modal - rendered via portal */}
      {showTerms && createPortal(
        <ModalOverlay $top={modalTop} onClick={() => setShowTerms(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowTerms(false)}>
              ×
            </CloseButton>
            <pre>
              {termsOfServiceText}
            </pre>
          </ModalContent>
        </ModalOverlay>,
        document.body
      )}
    </Section>
  );
}
