export default function ReceiptFooter({ email }: { email: string }) {
return (
<footer className="bg-black text-white text-center py-10">
<p className="font-semibold">That’s all folks!</p>
<p className="mt-1">Think I can ship your next reality-bending feature? Don’t be a stranger 👇</p>
<a href={`mailto:${email}`} className="text-blue-400 underline mt-2 inline-block">{email}</a>
</footer>
);
}