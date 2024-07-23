type Profile = {
  type: 'basic' | 'advanced',
  name: string,
  email?: string
}

function Component(profile: Profile) {
  const {type, name, email} = profile
  return (
    <div>
      <h2>name: {name}</h2>
      {type === "advanced" ? <h2>email: {email}</h2>: null}
    </div>
  );
}
export default Component;
