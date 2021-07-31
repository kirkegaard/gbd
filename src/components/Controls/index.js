import { useEffect, useState } from "react";
import DatGui, {
  DatBoolean,
  DatColor,
  DatFolder,
  DatSelect,
} from "react-dat-gui";

import { useStore } from "../../contexts/store";

import "react-dat-gui/dist/index.css";
import styles from "./index.module.scss";

const Controls = () => {
  const { data, setData, options } = useStore();

  const handleUpdate = (newData) => setData({ ...data, ...newData });

  return (
    <DatGui data={data} onUpdate={handleUpdate}>
      <DatSelect label="Model" path="model" options={options.models} />
      <DatColor label="Shell Color" path="shell_color" />
      <DatBoolean path="show_logo" label="Show logo" />
      <DatFolder title="Buttons">
        <DatSelect
          label="A Button Type"
          path="a_type"
          options={options.button_type}
        />
        <DatColor label="D-Pad Color" path="dpad_color" />
        <DatColor label="A Button Color" path="a_color" />
        <DatSelect
          label="B Button Type"
          path="b_type"
          options={options.button_type}
        />
        <DatColor label="B Button Color" path="b_color" />
        <DatColor label="Start & Select Color" path="start_select_color" />
        <DatSelect
          label="Start & Select Type"
          path="start_select_type"
          options={options.start_select_type}
        />
        <DatColor label="Left Trigger Color" path="l_color" />
        <DatColor label="Right Trigger Color" path="r_color" />
      </DatFolder>
      <DatFolder title="Lens">
        <DatColor label="Lens Color" path="lens_color" />
        <DatSelect
          label="Lens Type"
          path="lens_type"
          options={options.lens_type}
        />
        <DatColor label="Led Color" path="led_color" />
      </DatFolder>
      <DatFolder title="Screen">
        <DatColor label="Screen Color" path="screen_color" />
        <DatSelect
          label="Screen Mode"
          path="screen_mode"
          options={options.screen_mode}
        />
        <DatSelect
          label="Screen Type"
          path="screen_type"
          options={options.screen_type}
        />
      </DatFolder>
    </DatGui>
  );
};

export { Controls };
