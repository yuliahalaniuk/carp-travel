const CheckboxField = ({ register, error }) => (
  <div className="md:row-start-2 md:col-start-1 md:pt-2 lg:pt-3 relative">
    <label
      className={`text-xxs font-extralight flex items-start gap-2 checkbox-label lg:text-widexxxs ${
        error && "text-error-clr"
      }`}
    >
      <input
        className="checkbox absolute whitespace-nowrap w-px h-px overflow-hidden border-0 p-0 clip-input m-[-1px] cursor-pointer"
        type="checkbox"
        {...register("agreed", { required: true })}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 22 22"
        fill="none"
      >
        <rect x="0.5" y="0.5" width="21" height="21" stroke="white" />
        <rect
          x="4"
          y="4"
          width="14px"
          height="14px"
          fill="rgba(255, 255, 255, 0.1)"
          className="checkbox-icon-small transition-colors"
        />
      </svg>
      I confirm my consent to the processing of personal data.
    </label>
  </div>
);

export default CheckboxField;
