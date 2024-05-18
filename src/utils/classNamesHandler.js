export const classNamesHandler = (defaultClassNames = "", newClassNames = "") => {
  const classNames = [
    ...defaultClassNames.split(" "),
    ...newClassNames.split(" ")
  ]

  return classNames.join(" ");
}