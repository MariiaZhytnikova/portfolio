// src/sections/Contacts.tsx
import styled from "styled-components";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { HeadingLG, BodyText } from "../components/ui/Typography";
import { MailIcon, PhoneIcon, LocationIcon } from "../components/icons/Icons";

const ContactCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled(HeadingLG)`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const RightColumn = styled.div``;

const Description = styled(BodyText)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.purple};
    flex-shrink: 0;
  }
`;

const ContactText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 0.875rem;
`;

const Input = styled.input`
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purple};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purple};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const SubmitButton = styled.button`
  padding: 14px 32px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(173, 70, 255, 0.4);
  }
`;

type ContactsProps = {
  id?: string;
};

export function Contacts({ id }: ContactsProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Section id={id}>
      <Container>
        <ContactCard>
          <SectionTitle>Get In Touch</SectionTitle>
          
          <ContactGrid>
            <LeftColumn>
              <Description>
                I'm always open to new opportunities and interesting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </Description>

              <ContactList>
                <ContactItem>
                  <MailIcon />
                  <ContactText>alex.chen@email.com</ContactText>
                </ContactItem>
                <ContactItem>
                  <PhoneIcon />
                  <ContactText>+358 00 00 00 000</ContactText>
                </ContactItem>
                <ContactItem>
                  <LocationIcon />
                  <ContactText>Helsinki, Finland</ContactText>
                </ContactItem>
              </ContactList>
            </LeftColumn>

            <RightColumn>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit">Send Message</SubmitButton>
              </Form>
            </RightColumn>
          </ContactGrid>
        </ContactCard>
      </Container>
    </Section>
  );
}
