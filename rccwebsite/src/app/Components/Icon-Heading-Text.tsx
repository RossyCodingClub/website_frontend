import { ReactNode } from 'react';
import { Text, Image, useTheme } from '@nextui-org/react';

interface IconHeadingTextProps {
    icon: ReactNode;
    headerContent: ReactNode;
    textContent: ReactNode;
  }

const IconHeadingText: React.FC<IconHeadingTextProps> = ({ icon, headerContent, textContent }) => {
  const { theme } = useTheme();

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ paddingRight: '3px' }}>
        <div style={{width: '24px', height: "24px"}}>
        {icon}
        </div>
      </div>
      <div>
        <Text h2 color={theme?.colors.secondary.toString()}>{headerContent}</Text>
        <Text color={theme?.colors.secondary.toString()}>{textContent}</Text>
      </div>
    </div>
  );
}

export default IconHeadingText;
