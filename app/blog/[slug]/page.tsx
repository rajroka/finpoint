import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">
          Taxes in Nepal
        </h1>
        <Image
          src="/images/tax-nepal.jpg"
          alt="Tax system in Nepal"
          width={600}
          height={400}
          className="rounded-lg mb-4"
        />
        <p className="text-lg">
          Nepal's tax system consists of direct and indirect taxes. The main direct tax is income tax, which applies to individuals, businesses, and corporations. The indirect taxes include VAT (Value Added Tax) and excise duties. The tax rates and slabs vary based on income levels, business types, and specific economic activities.
        </p>
        <p className="mt-4 text-lg  ">
          The government of Nepal imposes progressive tax rates on individual income, meaning that higher earners pay a higher percentage of tax. Additionally, businesses are required to pay corporate tax, which varies by sector. VAT is currently set at 13% and is applicable to most goods and services.
        </p>
        <p className="mt-4 text-lg">
          The tax system in Nepal is managed by the Inland Revenue Department (IRD), which oversees tax collection, compliance, and enforcement. Individuals and businesses must register with the IRD, file tax returns, and make timely payments to avoid penalties.
        </p>
        <p className="mt-4 text-lg">
          Income tax in Nepal is categorized into individual and corporate taxes. Individual taxpayers are subject to a progressive tax rate based on their annual income. For example, individuals earning below NPR 400,000 per year are taxed at a lower rate, while those earning above NPR 2,000,000 face a higher tax bracket. Corporate tax rates vary depending on the nature of the business, with banks and financial institutions typically taxed at a higher rate than manufacturing or service-based companies.
        </p>
        <p className="mt-4 text-lg">
          VAT is another significant component of Nepal’s tax system. It is levied on the sale of goods and services, with businesses required to register for VAT if their annual turnover exceeds the prescribed threshold. VAT ensures that tax is collected at multiple stages of the supply chain, making it a key revenue source for the government.
        </p>
        <p className="mt-4 text-lg">
          Other taxes in Nepal include excise duties, customs duties, and property taxes. Excise duties apply to specific goods such as alcohol, tobacco, and fuel. Customs duties are imposed on imported goods, with rates varying based on the type and origin of the product. Property tax is collected by local government bodies and varies depending on the location and valuation of the property.
        </p>
        <p className="mt-4 text-lg">
          Tax compliance in Nepal has improved in recent years with the introduction of online tax filing systems and digital payment options. The government continues to reform tax policies to increase transparency and efficiency, aiming to expand the tax base and reduce evasion.
        </p>
        <p className="mt-4 text-lg">
          Understanding Nepal’s tax system is crucial for individuals and businesses to ensure compliance and optimize tax planning. Proper tax management can help businesses reduce liabilities and contribute to national economic growth. Consulting with tax professionals and staying updated on tax regulations can provide significant advantages in financial planning.
        </p>
      </div>
    </div>
  );
}
