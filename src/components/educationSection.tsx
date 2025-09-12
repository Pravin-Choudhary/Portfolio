

const education = {
                institution: "Maulana Azad National Urdu University, Hyderabad",
                degree: "B.Tech (Lateral Entry), Computer Science",
                period: "Oct 2022 - May 2025",
                gpa: "CGPA: 8.71/10",
                icon: "🎓",
            }

export function EducationSection(){
    return (
        <>
       
            <div className="pl-0 sm:p-2 sm:px-6 space-y-10">
                    <div>
                        <h3 className="text-3xl sm:text-[32px] tracking-normal font-[600] px-1">Education</h3>
                    </div>
                    <div className="flex gap-8 ">
                        <div  className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                            🎓
                        </div>
                        <div className="space-y-1">
                                <h3 className="text-lg font-semibold">MIT Arts, Commerce & Science College (MITACSC), Pune</h3>
                                <p className="text-muted-foreground text-lg">BCA(Science) , Computer Applications</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-base text-muted-foreground">
                                    <span>Passing out 2026</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>CGPA: 8.9/10</span>
                                </div>
                        </div>
                    </div>
            </div>

        </>
    )
}