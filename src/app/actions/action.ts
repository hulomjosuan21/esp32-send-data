'use server'

import axios from "axios";

export default async function handleSubmit(formData: FormData){
    const text = formData.get('text');
    const data = {
        state: text
    }

    const result = await axios.post('http://192.168.43.97:2104/api/send',data);

    console.log(text)
}