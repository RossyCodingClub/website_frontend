import { ReactNode } from 'react';
import { Text, Image, useTheme } from '@nextui-org/react';

interface IconHeadingTextProps {
    headerContent: ReactNode;
    textContent: ReactNode;
  }

const HeaderText: React.FC<IconHeadingTextProps> = ({headerContent, textContent }) => {
  const { theme } = useTheme();

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ paddingRight: '3px' }}>
        <div style={{width: '24px', height: "24px"}}>
        </div>
      </div>
      <div>
        <Text h2 color={theme?.colors.secondary.toString()}>{headerContent}</Text>
        <Text color={theme?.colors.secondary.toString()}>{textContent}</Text>
      </div>
    </div>
  );
}

export default HeaderText;
