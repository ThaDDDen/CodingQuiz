import React from "react";
import { Switch, View } from "react-native";
import { useHaptics } from "../../contexts/HapticsContext";
import { useTheme } from "../../contexts/ThemeContext";
import { SettingModel } from "../../models/SettingModel";
import { MdText, SmText } from "../../Styles/texts";
import { FlexBox } from "../../Styles/views";

interface Props {
  item: SettingModel;
  handleToggle: (value: boolean, item: SettingModel) => void;
  setToggleValue: (item: SettingModel) => boolean;
}
const SettingItem = ({ item, handleToggle, setToggleValue }: Props) => {
  const { themeColors } = useTheme();
  const { hapticsSuccess } = useHaptics();
  return (
    <FlexBox>
      <View>
        <MdText style={{ color: themeColors.commons.white }}>{item.title}</MdText>
        <SmText style={{ color: themeColors.commons.white }}>{item.desc}</SmText>
      </View>
      <View>
        <Switch
          trackColor={{ false: themeColors.lightGrey, true: themeColors.lightGreen }}
          thumbColor={"#fff"}
          ios_backgroundColor={themeColors.deepPurple}
          onValueChange={(value) => {
            handleToggle(value, item), hapticsSuccess();
          }}
          value={setToggleValue(item)}
        />
      </View>
    </FlexBox>
  );
};

export default SettingItem;
