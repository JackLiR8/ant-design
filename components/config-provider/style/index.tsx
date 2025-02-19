import { useStyleRegister } from '@ant-design/cssinjs';
import { resetIcon } from '../../style';
import { useToken } from '../../theme';

const useStyle = (iconPrefixCls: string) => {
  const [theme, token] = useToken();
  // Generate style for icons
  return useStyleRegister(
    { theme, token, hashId: '', path: ['ant-design-icons', iconPrefixCls] },
    () => [
      {
        [`.${iconPrefixCls}`]: resetIcon(),
      },
    ],
  );
};

export default useStyle;
