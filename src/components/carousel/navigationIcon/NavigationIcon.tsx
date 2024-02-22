import styles from './NavigationIcon.module.scss';

export enum IconTypes {
  LEFT = 'left',
  RIGHT = 'right',
}

/**
 * Represents a navigation icon component.
 * This component renders a navigation icon based on the specified icon type.
 *
 * @param props The properties for the NavigationIcon component.
 * @param props.iconType The type of navigation icon to render (either 'left' or 'right').
 * @returns The JSX structure for the navigation icon.
 */
function NavigationIcon(props: { iconType: IconTypes }) {
  return (
    <i
      className={`${styles.navIcon} ${props.iconType === IconTypes.LEFT ? 'fi fi-rs-angle-left' : 'fi fi-rs-angle-right'}`}
    />
  );
}

export default NavigationIcon;
