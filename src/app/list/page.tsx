"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";

interface FormSubmission {
  id: number;
  country: string;
  city: string;
  telegram: string;
  amount: number;
  createdAt: string;
}

export default function List() {
  const [forms, setForms] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchForms() {
      try {
        const response = await fetch("/api/get-forms");
        if (!response.ok) {
          throw new Error("Failed to fetch forms");
        }
        const data = await response.json();
        setForms(data.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchForms();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Telegram</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {forms.map((form) => (
          <TableRow key={form.id}>
            <TableCell>{form.id}</TableCell>
            <TableCell>{form.country}</TableCell>
            <TableCell>{form.city}</TableCell>
            <TableCell>{form.telegram}</TableCell>
            <TableCell>{form.amount}</TableCell>
            <TableCell>{new Date(form.createdAt).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
