package ac.simons.bootiful_databases;

import java.util.Map;
import org.jooq.ConnectionProvider;
import org.jooq.ExecuteListenerProvider;
import org.jooq.Record;
import org.jooq.RecordMapper;
import org.jooq.RecordMapperProvider;
import org.jooq.RecordType;
import org.jooq.SQLDialect;
import org.jooq.TransactionProvider;
import org.jooq.conf.RenderKeywordStyle;
import org.jooq.conf.RenderNameStyle;
import org.jooq.impl.DefaultConfiguration;
import org.jooq.impl.DefaultRecordMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ResolvableType;

@Configuration
public class JooqSpringBootConfig {

    @Bean
    public org.jooq.Configuration jooqConfig(
            final ConnectionProvider connectionProvider,
            final TransactionProvider transactionProvider,
            final ExecuteListenerProvider executeListenerProvider,
            @Value("${jooq.renderFormatted:false}") final boolean renderFormatted,
            final Map<String, RecordMapper> recordMappers
    ) {
        final DefaultConfiguration hlp = new DefaultConfiguration();
        return hlp
                .derive(hlp.settings()
                        .withRenderNameStyle(RenderNameStyle.LOWER)
                        .withRenderKeywordStyle(RenderKeywordStyle.UPPER)
                        .withRenderFormatted(renderFormatted)
                )
                .derive(connectionProvider)
                .derive(transactionProvider)
                .derive(executeListenerProvider)
                .derive(new RecordMapperProvider() {
                    @Override
                    public <R extends Record, E> RecordMapper<R, E> provide(final RecordType<R> recordType, final Class<? extends E> type) {
                        return recordMappers
                                .values().stream()
                                .filter(rm -> {
                                    final ResolvableType resolvableMapperType = ResolvableType.forClass(rm.getClass()).as(RecordMapper.class);
                                    return resolvableMapperType.resolveGeneric(1).isAssignableFrom(type);
                                })
                                .findFirst()
                                .orElseGet(() -> new DefaultRecordMapper<>(recordType, type));
                    }
                })
                .derive(SQLDialect.ORACLE);
    }
}