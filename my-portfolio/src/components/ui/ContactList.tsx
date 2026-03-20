// src/components/ui/Contacts.tsx
import styled from "styled-components";

export const ContactListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ContactItemWrapper = styled.a<{ color?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  div {
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.radius.sm};
    background-color: ${({ color, theme }) =>
    color === "purple"
      ? theme.colors.purpleLight
      : theme.colors.orangeLight};
    }

  &:hover {
    opacity: 0.8;
  }
`;

interface ContactInfo {
  icon: React.ElementType;
  text: string;
  href: string;
  color?: string;
}

interface ContactListProps {
  items: ContactInfo[];
}

export const ContactList: React.FC<ContactListProps> = ({ items }) => (
  <ContactListWrapper>
    {items.map((c, idx) => {
      const Icon = c.icon;
      return (
        <ContactItemWrapper key={idx} href={c.href} color={c.color}>
          <div>
            <Icon
              size={16}
              color={c.color === "purple" ? "#a855f7" : "#fb923c"}
            />
          </div>
          {c.text}
        </ContactItemWrapper>
      );
    })}
  </ContactListWrapper>
);