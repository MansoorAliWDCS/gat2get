const Stats = ({
    currentStep,
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
    step
  }) => (
    <div className="mt-50 d-flex align-item-center justify-content-between">
      {step > 1 && (
        <button className="btn btn-default btn-block p-0 shadow-none text-green" onClick={previousStep}>
          <i className="fa fa-chevron-left fs-16 mr-6"></i>Back
        </button>
      )}
      {step < totalSteps ? (
        <button className="btn cmn-btn btn-block min-w-140px" onClick={nextStep}>
          Next
        </button>
      ) : (
        <button className="btn cmn-btn btn-block min-w-140px" onClick={nextStep}>
          Finish
        </button>
      )}
    </div>
  );

  export default Stats