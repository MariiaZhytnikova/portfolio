// src/sections/Contacts.tsx
import { useState } from "react";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { Section } from "../components/layout/Section.tsx";
import { Container } from "../components/ui/Container.tsx";
import { Card } from "../components/ui/Card.tsx";
import { HeadingLG, BodyTextSm } from "../components/ui/Typography";
import { PrimaryButton } from "../components/ui/Button.tsx";
import { SocialButtons } from "../components/ui/SosialButtons.tsx";
import { socialLinks } from "../components/data/SocialLinksData.tsx";
import { ContactList } from "../components/ui/ContactList.tsx";
import { contactInfo } from "../components/data/ContactInfoData.tsx";
import { FieldWrapper } from "../components/ui/MotionWrapper.tsx";
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

type GetInTouchProps = {
  id?: string;
};

export function GetInTouch({ id }: GetInTouchProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
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
            <PrimaryButton type="submit">
              Send Message <Send size={20} />
            </PrimaryButton>
          </Form>
          </RightColumn>
          </ColumnGrid>
        </Card>
      </Container>
    </Section>
  );
}
