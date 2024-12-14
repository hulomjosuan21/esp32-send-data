'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from '@/components/ui/label';
export default function Home() {
  const [response, setResponse] = useState('');
  const [input, setInput] = useState('');

  const sendDataToESP32 = async () => {
    try {
      const res = await axios.post('http://192.168.0.100/data', input, {
        headers: { 'Content-Type': 'text/plain' },
      });
      setResponse(res.data);
      setInput('')
    } catch (error) {
      console.error('Error details:', error); // Log detailed error info
      setResponse(error instanceof Error ? error.message : 'An unknown error occurred');
    }
    
  };

  return (
    <div className='h-screen grid place-items-center'>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Send Data to Esp32</CardTitle>
            <CardDescription>{response && response}</CardDescription>
          </CardHeader>
          <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Data</Label>
                  <Input onChange={e => setInput(e.target.value)}/>
                </div>
              </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={sendDataToESP32}>Submit</Button>
          </CardFooter>
        </Card>
    </div>
  );
}
