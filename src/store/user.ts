import { create } from "zustand";

interface UserStateProps {
  name: string;
  avatar: string;
  signatureImg: string;
}

export const useUserStore = create<UserStateProps>(() => ({
  name: "Lucas Paes",
  avatar: "https://github.com/shadcn.png",
  signatureImg: "/image/assinatura.png",
}));
