import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      {/* <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Course
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
      
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
      </div>  */}

      <div className="flex flex-col xl:flex-row w-full items-start gap-y-8 xl:gap-y-0 xl:gap-x-6 overflow-hidden">
  {/* Main Content Area */}
  <div className="flex flex-1 flex-col w-full">
    <h1 className="mb-6 sm:mb-8 md:mb-10 lg:mb-14 text-xl sm:text-2xl md:text-3xl font-medium text-richblack-5">
      Add Course
    </h1>
    <div className="flex-1">
      <RenderSteps />
    </div>
  </div>
  
  {/* Course Upload Tips - Mobile Version */}
  <div className="w-full rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-5 md:p-6 xl:hidden">
    <p className="mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg text-richblack-5">⚡ Course Upload Tips</p>
    <ul className="ml-4 sm:ml-5 list-item list-disc space-y-2 sm:space-y-3 md:space-y-4 text-xs text-richblack-5">
      <li>Set the Course Price option or make it free.</li>
      <li>Standard size for the course thumbnail is 1024x576.</li>
      <li>Video section controls the course overview video.</li>
      <li>Course Builder is where you create & organize a course.</li>
      <li>
        Add Topics in the Course Builder section to create lessons,
        quizzes, and assignments.
      </li>
      <li>
        Information from the Additional Data section shows up on the
        course single page.
      </li>
      <li>Make Announcements to notify any important</li>
      <li>Notes to all enrolled students at once.</li>
    </ul>
  </div>
  
  {/* Course Upload Tips - Desktop Version (Sticky) */}
  <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
    <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
    <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
      <li>Set the Course Price option or make it free.</li>
      <li>Standard size for the course thumbnail is 1024x576.</li>
      <li>Video section controls the course overview video.</li>
      <li>Course Builder is where you create & organize a course.</li>
      <li>
        Add Topics in the Course Builder section to create lessons,
        quizzes, and assignments.
      </li>
      <li>
        Information from the Additional Data section shows up on the
        course single page.
      </li>
      <li>Make Announcements to notify any important</li>
      <li>Notes to all enrolled students at once.</li>
    </ul>
  </div>
</div>

    </>
  )
}