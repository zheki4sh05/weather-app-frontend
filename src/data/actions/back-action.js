import { redirect } from "next/navigation";

export async function backPageHandler(revState, formData){

    redirect(formData.get("page"))


}