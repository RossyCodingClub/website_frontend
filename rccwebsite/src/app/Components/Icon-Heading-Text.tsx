import { ReactNode } from 'react';
import { Text, Image, useTheme } from '@nextui-org/react';

interface IconHeadingTextProps {
  iconPath: string;
  headerContent: ReactNode;
  textContent: ReactNode;
}

const IconHeadingText: React.FC<IconHeadingTextProps> = ({ iconPath, headerContent, textContent }) => {
  const { theme } = useTheme();

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ paddingRight: '3px' }}>
        <Image src={iconPath} width={24} height={24} />
      </div>
      <div>
        <Text h2 color={theme?.colors.secondary.toString()}>{headerContent}</Text>
        <Text color={theme?.colors.secondary.toString()}>{textContent}</Text>
      </div>
    </div>
  );
}

export default IconHeadingText;
