"use client"

import { useMemo } from "react"
import { useTaskContext } from "@/lib/task-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Medal, Award } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

const RANK_COLORS = [
  "hsl(45, 93%, 47%)",
  "hsl(0, 0%, 70%)",
  "hsl(25, 77%, 48%)",
  "hsl(217, 92%, 60%)",
  "hsl(217, 72%, 50%)",
]

const RANK_ICONS = [Trophy, Medal, Award]

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ payload: { name: string; completed: number; total: number } }>
}) {
  if (!active || !payload?.length) return null
  const data = payload[0].payload
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-md">
      <p className="text-sm font-medium text-foreground">{data.name}</p>
      <p className="text-xs text-muted-foreground mt-0.5">
        {data.completed} of {data.total} tasks completed
      </p>
    </div>
  )
}

export function TopCompletersChart() {
  const { tasks, allEmployees } = useTaskContext()

  const leaderboard = useMemo(() => {
    const stats = allEmployees.map((emp) => {
      const empTasks = tasks.filter((t) => t.assigneeId === emp.id)
      const completed = empTasks.filter((t) => t.status === "completed").length
      return {
        id: emp.id,
        name: emp.name,
        initials: emp.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase(),
        completed,
        total: empTasks.length,
        rate: empTasks.length > 0 ? Math.round((completed / empTasks.length) * 100) : 0,
      }
    })
    return stats.sort((a, b) => b.completed - a.completed).slice(0, 5)
  }, [tasks, allEmployees])

  const maxCompleted = Math.max(...leaderboard.map((e) => e.completed), 1)

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-[hsl(45,93%,47%)]" />
          <CardTitle className="text-sm font-semibold text-foreground">
            Top 5 Task Completers
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        {/* Chart */}
        <div className="h-40 mb-5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={leaderboard}
              margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(240, 4%, 16%)"
                vertical={false}
              />
              <XAxis
                dataKey="initials"
                tick={{ fontSize: 11, fill: "hsl(240, 5%, 55%)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fontSize: 11, fill: "hsl(240, 5%, 55%)" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Bar dataKey="completed" radius={[4, 4, 0, 0]} maxBarSize={36}>
                {leaderboard.map((_, index) => (
                  <Cell key={index} fill={RANK_COLORS[index] ?? RANK_COLORS[4]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Ranked List */}
        <div className="flex flex-col gap-2">
          {leaderboard.map((person, index) => {
            const RankIcon = RANK_ICONS[index]
            return (
              <div
                key={person.id}
                className="flex items-center gap-3 rounded-lg px-3 py-2 bg-secondary/50"
              >
                {/* Rank */}
                <div className="flex h-6 w-6 items-center justify-center shrink-0">
                  {RankIcon ? (
                    <RankIcon
                      className="h-4 w-4"
                      style={{ color: RANK_COLORS[index] }}
                    />
                  ) : (
                    <span className="text-xs font-bold text-muted-foreground">
                      #{index + 1}
                    </span>
                  )}
                </div>

                {/* Avatar + Name */}
                <Avatar className="h-7 w-7 shrink-0">
                  <AvatarFallback
                    className="text-[10px] font-medium"
                    style={{
                      backgroundColor:
                        index === 0
                          ? "hsl(45, 93%, 47%)"
                          : "hsl(240, 4%, 14%)",
                      color: index === 0 ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 95%)",
                    }}
                  >
                    {person.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {person.name}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">
                      {person.completed}
                    </p>
                    <p className="text-[10px] text-muted-foreground leading-none">
                      completed
                    </p>
                  </div>
                  {/* Progress bar */}
                  <div className="w-16 hidden sm:block">
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(person.completed / maxCompleted) * 100}%`,
                          backgroundColor: RANK_COLORS[index] ?? RANK_COLORS[4],
                        }}
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5 text-right">
                      {person.rate}%
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
