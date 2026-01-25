export function SideNumber() {
	return (
		<aside
			className={`
           shadow-lg transition-transform duration-300 z-20
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-64 overflow-y-auto
        `}
		>
			<div className='p-6'>
				<div className='flex items-center justify-between mb-6'>
					<h2 className='text-lg font-bold'>Questions</h2>
					<button
						onClick={() => setSidebarOpen(false)}
						className='lg:hidden p-1 hover:bg-slate-100 rounded'
					>
						<ChevronLeft className='w-5 h-5' />
					</button>
				</div>

				{/* Progress */}
				<div className='mb-6 p-4 rounded-lg'>
					<div className='flex items-center justify-between mb-2 text-sm'>
						<span className=''>Progress</span>
						<span className='font-semibold'>
							{answeredCount}/{sampleQuiz.length}
						</span>
					</div>
					<div className='h-2 rounded-full overflow-hidden'>
						<div
							className='h-full bg-green-500 transition-all duration-300'
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>

				{/* Question Grid */}
				<div className='grid grid-cols-5 gap-2'>
					{sampleQuiz.map((q, idx) => {
						const isAnswered = isQuestionAnswered(q.id);
						const isCurrent = currentPage === idx + 1;

						return (
							<button
								key={q.id}
								onClick={() => goToPage(idx + 1)}
								className={`
                      aspect-square rounded-lg font-semibold text-sm transition-all
                      ${isCurrent 
                        ? 'bg-primary text-white ring-2 ring-primary ring-offset-2' 
                        : isAnswered
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
						: 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
							>
								{isAnswered && !isCurrent && <Check className='w-4 h-4 mx-auto' />}
								{!isAnswered && !isCurrent && idx + 1}
								{isCurrent && idx + 1}
							</button>
						);
					})}
				</div>

				{/* Submit Button */}
				<Button
					onClick={handleSubmit}
					className='w-full mt-6 px-4 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition font-semibold'
				>
					Submit Quiz
				</Button>
			</div>
		</aside>
	);
}
