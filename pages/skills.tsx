import type { NextPage } from "next";

const SkillForm: NextPage = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    const data = {...formData, level: 3}

    const res = await fetch("/api/skills", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="text-black">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="logo" />
        <input type="number" name="level" />
        <input type="text" name="link" />
        <textarea name="description"/>

        <button type="submit">Add skill</button>
      </form>
    </div>
  );
};

export default SkillForm;
