import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import FormUpload from '@/components/FormUpload'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  console.log(data);



  return (
    <>
        <p>Hello {data.user.email}</p>
        <FormUpload user={data.user} />
    </>
  )
 
}
