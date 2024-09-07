import { useRouter } from 'next/navigation'
import { forwardRef } from 'react'

const SuccessModal = forwardRef(
    ({ header }, ref) => {
        const router = useRouter()

        const handleClick = (e) => {
            e.preventDefault()
            ref.current.close()
            router.push('/shop')
        }
        return (
            <dialog ref={ref} className='fixed left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 z-[20] rounded-lg backdrop:bg-black/90'>
                <div className='flex flex-col w-[30rem] bg-modal py-8 px-8 font-raleway'>
                    <h1 className='font-bold text-2xl'>Ordered Successfully!</h1>
                    <div className='grid my-2 text-lg'>
                        <p>Your order has been submitted successfully.</p>
                        <p>We will get back to you on this with further details via email within the next few minutes.</p>
                    </div>
                    <form method='dialog' className='flex justify-end text-sm mx-2'>
                        <button onClick={handleClick} className='text-slate-100 px-4 py-3 bg-black rounded-lg text-lg hover:bg-gray-900'>Okay</button>
                    </form>
                </div>
            </dialog>
        )
    }
)

SuccessModal.displayName = 'SuccessModal'
export default SuccessModal;
