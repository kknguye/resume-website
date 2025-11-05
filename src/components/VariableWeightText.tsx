interface VariableWeightTextProps {
  regularText?: string;
  extraBoldText?: string;
  invert?: boolean;
}

const VariableWeightText: React.FC<VariableWeightTextProps> = ({ regularText, extraBoldText, invert = false }) => {
  return (
    <h2 className={`text-5xl py-5 leading-[56px] ${invert && 'invert'}`}>
      {regularText}
      {extraBoldText && <span className="ms-4 font-extrabold">{extraBoldText}</span>}
    </h2>
  )
}

export default VariableWeightText;
